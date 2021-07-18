npx tsc $1

FilenameWithExt=$1
Filename=$(echo $FilenameWithExt | cut -d '.' -f 1)
node $Filename.js
