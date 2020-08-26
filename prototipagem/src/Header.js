import * as React from 'react';
import { Appbar , Banner} from 'react-native-paper';
import { Platform } from 'react-native';


const Header = () => (
    <Appbar.Header>
       <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
);

export default Header;