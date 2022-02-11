import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Kit } from "./models";

function KitDetails(props: { kit: Kit }) {
  const { kit } = props
  return (
    <Card>
      <CardContent sx={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography variant="h6" component="div">
          Kit Details
        </Typography>
        <Typography variant="body2">
          <b>ID:</b> {kit.id}
        </Typography>
        <Typography variant="body2">
          <b>Label ID:</b> {kit.label_id}
        </Typography>
        <Typography variant="body2">
          <b>Tracking Code: </b> {kit.shipping_tracking_code}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default KitDetails