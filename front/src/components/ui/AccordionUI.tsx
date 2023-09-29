import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CubeHistory } from '../../api/api';
import {
  COMMON_CUBE,
  COMMON_ADDITIONAL_CUBE,
  CUBE_NAME,
} from '../../constants/cubeGuide';

import { WhiteAdditionalCubeOptionUI } from './WhiteAdditionalCubeOptionUI';
import { AdditionalCubeOptionUI } from './AdditionalCubeOptionUI';
import { BlackCubeOptionUI } from './BlackCubeOptionUI';
import { CommonCubeOptionUI } from './CommonCubeOptionUI';

type AccordionUIType = {
  data: CubeHistory[];
  selectedCubeName: string;
  startIndex: number;
  filterDataLength: number;
};

export const AccordionUI = ({
  data,
  selectedCubeName,
  startIndex,
  filterDataLength,
}: AccordionUIType) => {
  const isInCommonCube = COMMON_CUBE.includes(selectedCubeName);
  const isInAdditionalCube = COMMON_ADDITIONAL_CUBE.includes(selectedCubeName);

  return (
    <Box>
      {data.map((item, i) => {
        return (
          <Accordion key={item.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-content${i + 1}`}
              id={`panel-content${i + 1}`}
            >
              <Typography variant="subtitle1">
                큐브 옵션 {filterDataLength - (startIndex + i)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                {isInCommonCube && <CommonCubeOptionUI data={item} />}

                {selectedCubeName === CUBE_NAME.BLACK_CUBE && (
                  <BlackCubeOptionUI data={item} />
                )}

                {isInAdditionalCube && <AdditionalCubeOptionUI data={item} />}

                {selectedCubeName === CUBE_NAME.WHITE_ADDITIONAL_CUBE && (
                  <WhiteAdditionalCubeOptionUI data={item} />
                )}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};
