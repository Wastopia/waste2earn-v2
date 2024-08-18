import { makeStyles } from "@mui/styles";
import { infinity } from 'ldrs'

infinity.register()

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    top: 300,
    zIndex: 1301,

  },
}));

export default function LinearLoader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <l-infinity
        size="155"
        stroke="5"
        stroke-length="0.25"
        bg-opacity="0.1"
        speed="1.3"
        color="white"
      />
    </div>
  );
}
