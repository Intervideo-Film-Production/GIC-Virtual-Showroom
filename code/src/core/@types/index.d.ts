// TODO need this?
export interface IExperience {
  title: string;
}

export interface ITour {
  title: string;
}

export interface IMapRoom extends IPosition {
  room: IRoom;
}

export interface IMap {
  image: "asset" // TODO need real type 
  rooms: IMapRoom[];
}

export interface IRoom {
  title: string;
  firstViewpoint: IViewpoint;
}

// export interface IPosition {
//   positionX: number;
//   positionY: number;
// }

// export interface I3DPosition extends IPosition {
//   positionZ: number;
// }

export interface IViewpoint {
  image: "asset" // TODO
  room: IRoom;
  enableViewpoints: IViewpoint[];
  // enableHHotspots: IHotspot[];
}

export interface IPortal extends I3DPosition { }


// export interface IViewpointPosition extends IPosition {
//   viewpoint: IViewpoint;
// }

export interface IHotspotContent {
  viewpoint: IViewpoint;
  content: daksdajdjsa;
}

export interface IHotspotPosition extends I3DPosition {
  hotspot: IHotspot;
  rotation: 3DRotation;
  size: 3DPlaneSize;
}
