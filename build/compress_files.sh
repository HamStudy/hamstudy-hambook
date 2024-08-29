#!/bin/bash

#!/bin/bash

function iterate_compress {
    declare -i COUNT
    TOTALDIFF=0
    while read line; do
        if [[ "$line" == *.br ]] || [[ "$line" == *.gz ]] || [[ "$line" == *"/bower/"* ]]; then
            continue;
        fi
        brotli_compress "$line"
        zopfli_compress "$line"

        if [ -f "${line}.br" ] && [ -f "${line}.gz" ]; then
            ORIGSIZE=$(wc -c "$line" | awk '{print $1;}')
            BRSIZE=$(wc -c "$line.br" | awk '{print $1;}')
            GZSIZE=$(wc -c "$line.gz" | awk '{print $1;}')
            echo "$line was($ORIGSIZE) gz($GZSIZE) br($BRSIZE)"

            SIZEDIFF=$(echo $GZSIZE $BRSIZE | awk '{printf "%d", $1 - $2}')
            DIFFRATIO=$(echo $SIZEDIFF $ORIGSIZE | awk '{printf "%f", $1 / $2}')
            TOTALDIFF=$(echo $TOTALDIFF $DIFFRATIO | awk '{printf "%f", $1 + $2}')
            COUNT=$(echo $COUNT + 1 | bc)

            # echo "ratio: $DIFFRATIO"
            READABLESAVINGS=$(echo $DIFFRATIO | awk '{printf "%.1f", $1 * 100}')
            # READABLESAVINGS="$(echo $DIFFRATIO * 100 | bc)"

            echo "Brotli saves an extra ${READABLESAVINGS}% space"
        fi
    done
    AVGADDITIONAL=$(echo $TOTALDIFF $COUNT | awk '{printf "%.1f", $1 / $2 * 100}')
    echo "Brotli compression was on average: $AVGADDITIONAL% better compression"
}

function brotli_compress {
    do_compress brotli "-Zkf" "br" "$1"
}

function zopfli_compress {
    do_compress zopfli "--gzip -i15" "gz" "$1"
}

function do_compress {
    FNAME=$4
    FOUT=${FNAME}.${3}
    if [ -f "$FOUT" ]; then
        # echo "$FOUT already exists"
        return 0
    fi
    "$1" "$2" "$FNAME"
    declare -i MINSIZE
    ORIGSIZE=$(wc -c "$FNAME" | awk '{print $1;}')
    MINSIZE=$(echo "($ORIGSIZE * 0.8)/1" | bc)

    NEWSIZE=$(wc -c "$FOUT" | awk '{print $1;}')
    if (( NEWSIZE > MINSIZE)); then
        echo "Insufficient compression ratio, skipping $FNAME"
        # rm -fv $FOUT
    else
        echo "Compressed $FNAME with $1 to $FOUT"
    fi
}

function run_or_fail {
    "$@"
    local status=$?
    if [ $status -ne 0 ]; then
        echo "Command failed: $@ run in $(pwd)" 1>&2
        exit $status
    fi
    return $status
}

run_or_fail find "$1" -type f \( -name '' \
    -o -name '*.js' \
    -o -name '*.css' \
    -o -name '*.svg' \
    -o -name '*.json' \
    -o -name '*.ttf' \
    -o -name '*.otf' \
    \) | iterate_compress
