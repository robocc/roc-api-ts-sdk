# RocApi Typescript SDK

This SDK provides typed class and methods to communicate with Robocc products

## Installation

The sources are provided in this repo, along with distributed library that you can use via

```
npm install https://github.com/robocc/roc-api-ts-sdk
```

## Usage

Once installed via npm, you can instantiate `RocApi` class via import

```ts
import { RocApi } from "@robocc/roc-api";
import { TopicEventCode } from "@robocc/roc-api/events";

const api = new RocApi({ host: "localhost:8523", api_key: "...", use_ssl: false });
api.on(TopicEventCode.Ready, () => console.log("Ready !"))
api.on(TopicEventCode.VehiclePose, (pose) =>
  console.log(`New vehicle pose ${pose.x} ${pose.y}`)
);
api.start()
```

Replace `host` option to connect to remote API via device IP (usually on port 8523) and set `api_key`.

## Documentation

You can find documenation at https://docs.robocc.com/roc-api-ts/8.19.9-selene-9/