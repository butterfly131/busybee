import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        width: '300px', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#ece6c2', 
        padding: theme.spacing(2),
        borderRadius: theme.spacing(1.5),
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
        marginBottom: theme.spacing(2), 
    },
    creator: {
        color: '#cc6b49', 
        marginBottom: theme.spacing(1),
    },
    divider: {
        margin: `${theme.spacing(1.7)}px 0`,
        backgroundColor: '#6f5643',
    },
    message: {
        color: '#6f3947', 
    },
}));

export default useStyles;
