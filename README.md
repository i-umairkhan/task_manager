# Task Manager API Documentation

### GET

`/api/v1/tasks` <br>

### POST

`/api/v1/tasks` <br>
Body:

```
{
  "name":"your task",
  "completed":false
}
```

### UPDATE + DELETE + GET (single)

`api/v1/tasks/:id`

## Must add `MONGO_URI` in .`.env`
