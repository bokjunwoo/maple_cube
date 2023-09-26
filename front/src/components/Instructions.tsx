import { InstructionsUI } from './ui/InstructionsUI';

export const Instructions = () => {
  const instructions = [
    '해당 사이트는 API키와 큐브 데이터를 수집하지 않습니다.',
    'Nexon Developers 정책에 따라 2022년 11월 25일 이후부터 조회할 수 있습니다.',
    '데이터는 일단위로 갱신되며, 오전 5시 이후 조회 시 전일 데이터를 조회할 수 있습니다.',
  ];

  return <InstructionsUI contents={instructions} variant="body2" />;
};
