import { Button, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ButtonType } from '../../const/buttons';

export function CalculatorButton({ label, color }: ButtonType) {
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
                width: 50,
                height: 50,
                minWidth: 'unset',
            }}
        >
            <Typography fontSize="1.25rem">{label}</Typography>
        </Button>
    );
}
