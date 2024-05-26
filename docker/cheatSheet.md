Important Commands of Docker 

1- docker images
    - this command will list all available images on your machine

2- docker ps 
    - similar to above , this will list all container on your machine , add -a if want all otherwise it will list only running containers

3- docker stop <contaienrId or name>
    this will stop a running container

4- docker start <contaienrId or name>

5- docker restart <containerId or name>

6- docker kill 
    forcefully stopping a container

7- docker logs <container name>
    fetch all logs from a container
     
8 - docker exec <container name> <command>
    basically helps you to run a command inside a running container ,widly used for debugging
    example docker exec my_container ls 

