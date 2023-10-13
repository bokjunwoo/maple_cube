import { Box, CircularProgress, Typography } from '@mui/material';

type ImageItem = {
  src: string;
  imageLoaded?: boolean;
  handleImageLoad?: () => void;
};
type DataItem = {
  text: string;
  coloredTexts: string[];
  imageSrc?: string | ImageItem[];
  imageLoaded?: boolean;
  handleImageLoad?: () => void;
  imageWidth?: string;
  imageHeight?: string;
};

type GuideTextUIType = {
  title: string;
  isImage: boolean;
  description: DataItem[];
};

export const GuideTextUI = ({
  title,
  isImage,
  description,
}: GuideTextUIType) => {
  function escapeRegExp(text: string) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'inline-flex', mb: 1 }}>
          <Typography variant="h6" sx={{ display: 'inline-block', mr: 1 }}>
            ◈
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 900 }}>
            {title}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'inline-flex' }}>
        <Typography
          variant="h6"
          sx={{ display: 'inline-block', mr: 1, visibility: 'hidden' }}
        >
          ◈
        </Typography>
        <Box>
          {description.map((item, itemIndex) => {
            const parts = item.text.split(
              new RegExp(
                `(${item.coloredTexts?.map(escapeRegExp).join('|')})`,
                'g'
              )
            );
            return (
              <Box key={itemIndex}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <span>
                    {parts.map((part, index) => {
                      const isColored = item.coloredTexts?.includes(
                        part.trim()
                      );

                      return (
                        <span key={index}>
                          {isColored ? (
                            <span style={{ color: 'red' }}>{part}</span>
                          ) : (
                            part
                          )}
                        </span>
                      );
                    })}
                  </span>
                </Typography>

                {isImage &&
                  typeof item.imageSrc === 'string' &&
                  !item.imageLoaded && (
                    <Box
                      sx={{
                        width: item.imageWidth,
                        height: item.imageHeight,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <CircularProgress />
                    </Box>
                  )}

                {isImage && typeof item.imageSrc === 'string' && (
                  <img
                    src={item.imageSrc}
                    alt={item.imageSrc}
                    style={{
                      maxWidth: '100%',
                      height: item.imageHeight,
                      display: item.imageLoaded ? 'block' : 'none',
                    }}
                    onLoad={item.handleImageLoad}
                  />
                )}

                {isImage &&
                  Array.isArray(item.imageSrc) &&
                  item.imageSrc.map((v) => {
                    return (
                      <Box key={v.src} sx={{ display: 'inline-block' }}>
                        {!v.imageLoaded && (
                          <Box
                            sx={{
                              width: item.imageWidth,
                              height: item.imageHeight,
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <CircularProgress />
                          </Box>
                        )}
                        <img
                          src={v.src}
                          alt={v.src}
                          style={{
                            maxWidth: '100%',
                            height: item.imageHeight,
                            display: v.imageLoaded ? 'block' : 'none',
                          }}
                          onLoad={v.handleImageLoad}
                        />
                      </Box>
                    );
                  })}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
