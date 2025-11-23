import { Box, Typography } from '@mui/material';
import type { Character } from '../../../domain/entities/character';
import { useDeviceType } from '../../hooks/useIsMobile';
import {
  SegmentedButton,
  Tarjeta,
  type CardStatus,
} from 'rick-morty-components-lib';
import { useFavorite } from '../../hooks/useFavorite';
import { useState } from 'react';
import { Empty } from '../empty/Empty';

const variantMap = {
  mobile: 'vertical-small',
  tablet: 'vertical-normal',
  desktop: 'horizontal-normal',
} as const;

const tabs = [
  { label: 'Todos', value: 'all' },
  { label: 'Favoritos', value: 'favorites' },
];

export const CharactersList = ({ characters }: { characters: Character[] }) => {
  const deviceType = useDeviceType();
  const [favorites, setFavorites] = useState<Character[]>([]);
  const [selectedTab, setSelectedTab] = useState<string | number>('all');

  const { onFavoriteChange } = useFavorite({
    characters: characters || [],
    favorites: favorites || [],
    setFavorites,
  });

  const characterList = selectedTab === 'all' ? characters : favorites;

  return (
    <Box
      sx={{
        flexDirection: 'column',
        alignItems: deviceType === 'mobile' ? 'center' : 'start',
        position: 'relative',
        mx: '4px',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <SegmentedButton
          tabs={tabs}
          onChange={setSelectedTab}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end',
          mb: 12,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '32px',
            top: '100px',
            display: 'flex',
            columnGap: '8px',
            right: '16px',
            position: 'absolute',
          }}
        >
          <Box
            fontWeight={600}
            fontSize={24}
          >
            {characterList?.length}
          </Box>
          Personajes
        </Typography>
      </Box>
      <Box
        className="container-card-main"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
          padding: 2,
          mt: '96px',
        }}
      >
        {characterList.length > 0 ? (
          characterList.map((character) => (
            <Tarjeta
              key={character.id}
              id={character.id}
              name={character.name}
              species={character.species}
              status={character.status as CardStatus}
              location={character.location.name}
              gender={character.gender}
              image={character.image}
              variant={variantMap[deviceType] ?? 'horizontal-normal'}
              onFavoriteChange={onFavoriteChange}
            />
          ))
        ) : (
          <Empty selectedTab={selectedTab as string} />
        )}
      </Box>
    </Box>
  );
};
