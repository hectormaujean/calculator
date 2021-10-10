import { MouseEvent } from 'react';
import { Button, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import { ButtonType } from '../../modules/buttons/types';

type Props = ButtonType & {
    handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export function CalculatorButton({ label, value, color, handleClick }: Props) {
    return (
        <Button
            variant="contained"
            sx={{
                color: color || grey[900],
                bgcolor: grey[200],
                boxShadow: 'none',
                ':hover': {
                    bgcolor: grey[300],
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
