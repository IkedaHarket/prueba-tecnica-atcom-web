# Prueba Tecnica Atcom

Desarrollo de API con C# y Frontend con Angular

## Iniciar proyecto

### Atcom API
- Ejecutar ScriptEvaluacion.sql en SQL SERVER 
- Ejecutar el siguiente procedure en SQL SERVER 

```
CREATE PROCEDURE GetPaginatedClients
    @Page INT,
    @Limit INT
AS
BEGIN
    SELECT C.[IdCliente], C.[Nombre], C.[Telefono], C.Email, C.[CodigoPais], P.[Descripcion],
           (SELECT CEILING(COUNT(*) * 1.0 / @Limit) FROM [atcom].[dbo].[Clientes]) AS TotalPages
    FROM [atcom].[dbo].[Clientes] as C
    INNER JOIN [atcom].[dbo].[Pais] as P ON C.[CodigoPais] = P.[Codigo]
    ORDER BY C.[IdCliente]
    OFFSET @Page * @Limit ROWS 
    FETCH NEXT @Limit ROWS ONLY;
END;
```

- Configurar appsettings.json de AtcomAPI
- Levantar AtcomAPI

### Angular
 - Configurar environments con AtcomAPI
 - Ejecutar ``` npm install ```
 - Ejecutar ``` ng serve ``` en la terminal
 - Para probar los test ejecutar ``` ng test ``` 
 
Nota -> Utilice PrimeNG para hacer mas rapido los diseños