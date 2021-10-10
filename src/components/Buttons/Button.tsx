import { MouseEvent, useContext } from 'react';

import { Button, Typography } from '@mui/material';

import { ButtonType } from '../../modules/buttons/types';
import { ThemeContext } from '../../modules/theme/context';
import { theme } from '../../modules/theme/theme';

type Props = ButtonType & {
    handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export function CalculatorButton({ label, value, color, handleClick }: Props) {
    const { themeMode } = useContext(ThemeContext);

    return (
        <Button
            variant="contained"
            sx={{
                color: color || theme[themeMode].color,
                bgcolor: theme[themeMode].buttonBgColor,
                boxShadow: 'none',
                ':hover': {
                    bgcolor: theme[themeMode].buttonHoverBgColor,
                    boxShadow: 'none',
                },
                margin: 0.5,
                borderRadius: 4,
                padding: 0,
                minWidth: 'unset',
                flex: '1 1 0px',
            }}
            onClick={handleClick}
            value={value ?? label}
        >
            <Typography fontSize="1.5rem">{label}</Typography>
        </Button>
    );
}
