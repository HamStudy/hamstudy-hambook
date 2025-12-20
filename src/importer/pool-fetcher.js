const fs = require('fs/promises');
const path = require('path');

const CACHE_DIR = path.join(__dirname, '../../.pool-cache');
const HAMSTUDY_API = 'https://hamstudy.org/api/pools';

// E2 = Technician, E3 = General, E4 = Extra
const POOL_PREFIX_TO_BOOK_DIR = {
    'E2': 'tech',
    'E3': 'general',
    'E4': 'extra'
};

async function ensureCacheDir() {
    try {
        await fs.mkdir(CACHE_DIR, { recursive: true });
    } catch (err) {
        if (err.code !== 'EEXIST') throw err;
    }
}

function poolIdToLocalPath(poolId) {
    const match = poolId.match(/^(E\d)_(\d{4})(?:_([a-z]{2}))?$/);
    if (!match) return null;
    
    const [, prefix, year, lang] = match;
    const dirPrefix = POOL_PREFIX_TO_BOOK_DIR[prefix];
    if (!dirPrefix) return null;
    
    const filename = lang ? `pool.${lang}.json` : 'pool.json';
    return path.join(__dirname, '../../', `${dirPrefix}${year}`, filename);
}

async function fetchPool(poolId) {
    await ensureCacheDir();
    
    const cachePath = path.join(CACHE_DIR, `${poolId}.json`);
    
    const cached = await fs.readFile(cachePath, 'utf8').catch(() => null);
    if (cached) {
        return JSON.parse(cached);
    }
    
    const localPath = poolIdToLocalPath(poolId);
    if (localPath) {
        const localPool = await fs.readFile(localPath, 'utf8').catch(() => null);
        if (localPool) {
            console.log(`Using local pool file for ${poolId}: ${localPath}`);
            const pool = JSON.parse(localPool);
            await fs.writeFile(cachePath, JSON.stringify(pool, null, 2));
            return pool;
        }
    }
    
    const url = `${HAMSTUDY_API}/${poolId}`;
    console.log(`Fetching pool ${poolId} from ${url}...`);
    
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch pool ${poolId}: ${response.status} ${response.statusText}`);
    }
    
    const pool = await response.json();
    
    await fs.writeFile(cachePath, JSON.stringify(pool, null, 2));
    console.log(`Cached pool ${poolId} to ${cachePath}`);
    
    return pool;
}

function buildQuestionMap(pool) {
    const qMap = {};
    if (pool && pool.pool) {
        for (const subelement of pool.pool) {
            if (subelement.sections) {
                for (const section of subelement.sections) {
                    if (section.questions) {
                        for (const question of section.questions) {
                            qMap[question.id] = question;
                        }
                    }
                }
            }
        }
    }
    return qMap;
}

module.exports = {
    fetchPool,
    buildQuestionMap,
    CACHE_DIR
};
