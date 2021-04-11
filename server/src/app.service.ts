import { Injectable } from '@nestjs/common';

export type Route = {
  title: string;
  startPosition: {
    latitude: number;
    longitude: number;
  };
  endPosition: {
    latitude: number;
    longitude: number;
  };
};

@Injectable()
export class AppService {
  #routes: Route[];
  constructor() {
    this.#routes = [
      {
        title: '1',
        startPosition: {
          latitude: -12.934562,
          longitude: -38.341596,
        },
        endPosition: {
          latitude: -12.937239,
          longitude: -38.340502,
        },
      },
      {
        title: '2',
        startPosition: {
          latitude: -12.932603,
          longitude: -38.336178,
        },
        endPosition: {
          latitude: -12.932174,
          longitude: -38.33903,
        },
      },
      {
        title: '3',
        startPosition: {
          latitude: -12.933727,
          longitude: -38.337133,
        },
        endPosition: {
          latitude: -12.936285,
          longitude: -38.339485,
        },
      },
      {
        title: '4',
        startPosition: {
          latitude: -12.933402,
          longitude: -38.335191,
        },
        endPosition: {
          latitude: -12.938104,
          longitude: -38.339349,
        },
      },
      {
        title: '5',
        startPosition: {
          latitude: -12.938371,
          longitude: -38.33419,
        },
        endPosition: {
          latitude: -12.936537,
          longitude: -38.332233,
        },
      },
    ];
  }
  getRoutes(): Route[] {
    return this.#routes;
  }
}
