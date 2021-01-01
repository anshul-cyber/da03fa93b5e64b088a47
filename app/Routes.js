import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './src/screens/Home';

const Project = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			title: 'Nasa Application',
			headerTintColor: '#ffffff',
			headerStyle: {
				backgroundColor: 'green'
			}
		}
	}
});

export default createAppContainer(Project);