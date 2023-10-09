echo "Checking for version.sh file"
if [ -f "./version.sh" ]
then
	source ./version.sh

	while getopts v: option; do
		case $option in
			*)
			echo -e "USAGE:\n";;
		esac
	done
	
	# Get the docker path
	TAG="$PREFIX"$VERSION
	docker build --no-cache -t $NAME:$TAG -f ./Dockerfile .
else
	echo "Could not find version.sh file. The version.sh file should set repo-specific env variables (e.g. version number). Please execute the script in a repo that contains a version.sh file"
fi