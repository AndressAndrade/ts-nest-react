# Trabalhando com kubernets localmente

### Primeiro, é necessário ter um cluster rodando
`kind create cluster --name nest-react`


### Subir o server em um terminal
```
kubectl apply -f nest-api/deploy.yaml
kubectl apply -f nest-api/service.yaml
kubectl expose -f nest-api/deploy.yaml
kubectl port-forward service/nest-api 3000 
```

### Subir o web em outro terminal
```
kubectl apply -f react-app/deploy.yaml
kubectl apply -f react-app/service.yaml
kubectl expose -f react-app/deploy.yaml
kubectl port-forward service/react-app 3001
```

### Para ver os pods
`kubectl get pods`

### Para ver os services
`kubectl get svc`

### Para remover o cluster
`kind delete cluster --name nest-react`