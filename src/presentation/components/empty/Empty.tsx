import { Box, Typography } from '@mui/material';

export const Empty = ({ selectedTab }: { selectedTab: string }) => {
  return (
    <Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: -114,
          left: 0,
          right: 0,
          textAlign: 'center',
          width: '100%',
          color: '#999',
          fontFamily: 'Montserrat',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '100%',
          }}
        >
          Oh no!
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '2%',
            top: '16px',
            position: 'relative',
          }}
        >
          There are no characters in{' '}
          {selectedTab === 'all' ? 'All' : 'Favorites'}!
        </Typography>
      </Box>
    </Box>
  );
};
