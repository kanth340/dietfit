import React,{
	View,
	Text,
	Image,
	Component
} from 'react-native';
import FBLogin from 'react-native-facebook-login';

class MemberInfo extends Component {
	constructor(props){
		super(props);

	}

	render(){
		
		return (
			<View>
				<Text> Hi {this.props.fbdata.profile.name}</Text>
				<Image source={{uri: this.props.fbdata.profile.picture.data.url}}
       				style={{width: 100, height: 100}} />
				<FBLogin onLogout={this.props.afterLogout} />
			</View>


			);
	}
}

export default MemberInfo;