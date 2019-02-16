# Signal Server example

Used for generating WebSocket connection between a user connected to the one channel.

---

- NodeJS - v11.2.0
- NPM - v6.5.0
- TypeScript - v3.3.1
- PostgreSQL - v11.1


## Сontents

1. [Development](#development)
2. [Endpoints specification](#endpoints-specification)
    1. [Create channel](#create-channel)
    2. [Show channel](#show-channel)
    3. [Websocket connection](#websocket-connection)

<br/>


## Development

For starting development use following commands:

1. `git clone git@github.com:igorbezsmertnyi/signal-server-example.git`
_Clone the repository_

<br/>

2. `cd signal-server-example`
_Change directory_

<br/>

3. `npm install` 
_Install node dependensies_

<br/>

4. `npm run dev`
_Start development server_

<br/>

5. `npm run migration:run`
_Migrate the database_



## Endpoints specification

## `Create channel`

### `HTTP POST /create`

Returning channel object

```json
{
  "channel": {
    "token": "uuidv4_token",
    "id": 1,
    "createdAt": "2019-02-16T16:09:01.651Z"
  }
}
```

<br/>

## `Show channel`

### `HTTP GET /{channelToken}`

Returning channel object

```json
{
  "channel": {
    "token": "uuidv4_token",
    "id": 1,
    "createdAt": "2019-02-16T16:09:01.651Z"
  }
}
```

<br/>

## `Websocket connection`

### `WS /{channelToken}`

Will return every message sended in channel scope

<br/>

---
Created by [Igor Bezssmertnyi](https://github.com/igorbezsmertnyi)
