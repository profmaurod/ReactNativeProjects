import * as React from 'react';
import { Appbar , Card, Button, LeftContent, Title, Paragraph} from 'react-native-paper';
import { Platform, View, Image } from 'react-native';
import {card} from './src/style/style.js';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';



export default function App() {
  return (
    
    <View>
      <Appbar.Header>
        <Appbar.Content title="Title" subtitle={'Subtitle'} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
      </Appbar.Header>
      <Card >
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Title
          style={[card.super, card.center]}
          title="Card Title"
          subtitle="Texto do paragrafo, bla bla bla"
        />
        <Card.Actions
          style={[card.super, card.center]} >
          <Button mode="contained">Sign Up Today</Button>
        </Card.Actions>
      </Card>
      <Card>
      <Image 
          style={card.image}
          source={require('./assets/IMAGEM-REDONDA.png')} />
        <Card.Content
                  style={card.super, card.center}>
          <Title>titulo</Title>
          <Paragraph>Textinho de cada paragrafo, bla bla bla</Paragraph>
        </Card.Content>
      </Card>

      <Card>
      <Image 
          style={card.image}
          source={require('./assets/IMAGEM-REDONDA.png')} />
        <Card.Content
                  style={card.super, card.center}>
          <Title>titulo</Title>
          <Paragraph>Textinho de cada paragrafo, bla bla bla</Paragraph>
        </Card.Content>
      </Card>

      <Card>
      <Image 
          style={card.image}
          source={require('./assets/IMAGEM-REDONDA.png')} />
        <Card.Content
                  style={card.super, card.center}>
          <Title>titulo</Title>
          <Paragraph>Textinho de cada paragrafo, bla bla bla</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
} 
