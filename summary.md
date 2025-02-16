# NestJS Request/ Response Pipeline Summary

This repositry demonstrates the **NestJS Request/ Response Pipeline**, explaining each stage in the pipeline, from receiving an HTTP request to sending a response.

## Pipeline Flow

Here is an illustration of the flow of a request through the NestJS pipeline, from the initial client request to the final response. The pipeline consists of several stages:

1. **Middleware:**

   - Executed before the route handler.
   - Can modify the request object, perform authentication, logging, etc.
   - Examples include body-parser middleware.

2. **Guards:**

   - Determine whether a request should be allowed to proceed to the route handler.
   - Based on authorization, roles, permissions, etc.
   - Implemented using the `CanActivate` interface.

3. **Interceptors (Before Route Handler):**

   - Intercept the request before it reaches the route handler.
   - Can transform the request, log performance, handle caching, etc.

4. **Pipes:**

   - Transform the request data before it reaches the route handler.
   - Used for validation, parsing, and data transformation.

5. **Route Handler:**

   - The core logic of the request.
   - Processes the request and returns a response.

6. **Interceptors (After Route Handler):**

   - Intercept the response after it's returned from the route handler.
   - Can transform the response, add headers, log performance, etc.

7. **Exception Filters:**

   - Handle exceptions thrown during any stage of the pipeline.
   - Provide centralized exception handling and error responses.

8. **Response:**
   - The final response sent back to the client.

## Key Components

- **NestInterceptor:** Handles intercepting requests and responses.
- **NestMiddleware:** Manages middleware functions.
- **CanActivate:** Interface for implementing guards.
- **PipeTransform:** Interface for implementing pipes.
- **ExceptionFilter:** Interface for implementing exception filters.
- **Providers:** Services and dependencies used throughout the pipeline.

## Execution Order

Here is the order of execution:

1. Middleware
2. Guards
3. Interceptors (before route handler)
4. Pipes
5. Route Handler
6. Interceptors (after route handler)
7. Exception Filters (if an exception is thrown)

## Summary Table

| Stage                 | Description                                                   |
| --------------------- | ------------------------------------------------------------- |
| Middleware            | Request processing before route handler (e.g., body parsing). |
| Guards                | Authorization and access control.                             |
| Interceptors (Before) | Request interception and transformation.                      |
| Pipes                 | Request data validation and transformation.                   |
| Route Handler         | Core logic for handling the request.                          |
| Interceptors (After)  | Response interception and transformation.                     |
| Exception Filters     | Centralized exception handling.                               |
