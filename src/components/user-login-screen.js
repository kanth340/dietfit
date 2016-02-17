import {View} from 'react-native'
import FBLogin from 'react-native-facebook-login';

class UserLogin extends Component {


render() {
	(
		<View style={styles.container}>
    		<FBLogin onLogin={function(e){
          		console.log('logged in');}}>
    		</FBLogin>
 		</View>
 	}
}
export default UserLogin