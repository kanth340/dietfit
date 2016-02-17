import React,{
	View,
	Text,
	Component
} from 'react-native';
import FBLogin from 'react-native-facebook-login';

class UserLogin extends Component {
	render() {
		return (
			<View >
				<Text>DietFit</Text>
	    		<FBLogin onLogin={this.props.afterLogin}>
	    		</FBLogin>
	 		</View>
	 	);
	}
}

export default UserLogin;