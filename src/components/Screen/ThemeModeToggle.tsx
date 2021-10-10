import { useContext } from 'react';

import { Box, IconButton } from '@mui/material';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import { grey } from '@mui/material/colors';

import { ThemeContext } from '../../modules/theme/context';
import { theme } from '../../modules/theme/theme';

export function ScreenThemeModeToggle() {
    const { themeMode, setThemeMode } = useContext(ThemeContext);

    const handleClick = () => {
        setThemeMode(themeMode === 'light' ? 'dark' : 'light');
    };

    return (
        <Box
            sx={{
                bgcolor: theme[themeMode].containerBgColor,
                margin: '40px auto auto',
                width: 'fit-content',
                borderRadius: 6,
            }}
        >
            <IconButton disabled={themeMode === 'light'} onClick={handleClick}>
                <WbSunnyOutlinedIcon htmlColor={themeMode === 'light' ? theme[themeMode].color : grey[700]} />
            </IconButton>
            <IconButton disabled={themeMode === 'dark'} onClick={handleClick}>
                <NightsStayOutlinedIcon htmlColor={themeMode === 'dark' ? theme[themeMode].color : grey[400]} />
            </IconButton>
        </Box>
    );
}
