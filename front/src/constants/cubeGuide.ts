export const CUBE_NAME = {
  RED_CUBE: '레드 큐브',
  BLACK_CUBE: '블랙 큐브',
  QUESTIONABLE_CUBE: '수상한 큐브',
  MASTER_CUBE: '명장의 큐브',
  CRAFTSMAN_CUBE: '장인의 큐브',
  KARMA_MASTER_CUBE: '카르마 명장의 큐브',
  KARMA_CRAFTSMAN_CUBE: '카르마 장인의 큐브',
  EVENT_RING_MASTER_CUBE: '이벤트 링 전용 명장의 큐브',
  QUESTIONABLE_ADDITIONAL_CUBE: '수상한 에디셔널 큐브',
  ADDITIONAL_CUBE: '에디셔널 큐브',
  WHITE_ADDITIONAL_CUBE: '화이트 에디셔널 큐브',
};

export const COMMON_CUBE = [
  CUBE_NAME.RED_CUBE,
  CUBE_NAME.CRAFTSMAN_CUBE,
  CUBE_NAME.EVENT_RING_MASTER_CUBE,
  CUBE_NAME.KARMA_CRAFTSMAN_CUBE,
  CUBE_NAME.KARMA_MASTER_CUBE,
  CUBE_NAME.MASTER_CUBE,
  CUBE_NAME.QUESTIONABLE_CUBE,
];

export const COMMON_ADDITIONAL_CUBE = [
  CUBE_NAME.ADDITIONAL_CUBE,
  CUBE_NAME.QUESTIONABLE_ADDITIONAL_CUBE,
];

type CubeTypeInfoType = {
  [key: string]: {
    color: string;
    name: string;
  };
};

type CubeTypeNameInfoType = {
  [key: string]: {
    color: string;
    image: string;
  };
};

export const cubeTypeInfo: CubeTypeInfoType = {
  노멀: {
    color: '#808080',
    name: 'N',
  },
  레어: {
    color: '#0089fa',
    name: 'R',
  },
  에픽: {
    color: 'purple',
    name: 'E',
  },
  유니크: {
    color: '#faaf00',
    name: 'U',
  },
  레전드리: {
    color: '#008000',
    name: 'L',
  },
};

export const cubeTypeNameInfo: CubeTypeNameInfoType = {
  '레드 큐브': {
    color: '#FF2E63',
    image: '/images/red_cube.png',
  },
  '블랙 큐브': {
    color: '#222831',
    image: '/images/black_cube.png',
  },
  '수상한 큐브': {
    color: '#016A70',
    image: '/images/questionable_cube.png',
  },
  '명장의 큐브': {
    color: '#52057B',
    image: '/images/master_cube.png',
  },
  '장인의 큐브': {
    color: '#9A3B3B',
    image: '/images/craftsman_cube.png',
  },
  '카르마 명장의 큐브': {
    color: '#52057B',
    image: '/images/karma_master_cube.png',
  },
  '카르마 장인의 큐브': {
    color: '#9A3B3B',
    image: '/images/karma_craftsman_cube.png',
  },
  '이벤트 링 전용 명장의 큐브': {
    color: '#52057B',
    image: '/images/master_cube.png',
  },
  '수상한 에디셔널 큐브': {
    color: '#016A70',
    image: '/images/questionable_additional_cube.png',
  },
  '에디셔널 큐브': {
    color: '#65C18C',
    image: '/images/additional_cube.png',
  },
  '화이트 에디셔널 큐브': {
    color: '#65C18C',
    image: '/images/white_additional_cube.png',
  },
};
