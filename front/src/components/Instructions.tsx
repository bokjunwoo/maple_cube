import { InstructionsUI } from './ui/InstructionsUI';

export const Instructions = () => {
  const instructions = [
    '해당 사이트는 API키와 큐브 데이터를 수집하지 않습니다.',
    'Nexon Developers 정책에 따라 2022년 11월 25일 이후부터 조회할 수 있습니다.',
    'Nexon Developers 정책에 따라 일 최대 조회 가능 큐브 데이터는 1,000개 입니다.',
    '일 최대 데이터의 개수를 넘는 큐브를 사용시 해당 정보는 제공되지 않습니다.',
    '데이터는 일단위로 갱신되며, 오전 5시 조회 시 전일 데이터를 조회할 수 있습니다.',
  ];

  return <InstructionsUI contents={instructions} variant="body2" />;
};
