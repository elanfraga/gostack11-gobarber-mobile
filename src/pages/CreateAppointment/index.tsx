import React, { useCallback } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useRoute, useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatr,
} from './styled';

interface RouteParams {
  providerId: string;
}

const CreateAppointment: React.FC = () => {
  const { user } = useAuth();
  const route = useRoute();
  const { providerId } = route.params as RouteParams;
  const { goBack } = useNavigation();

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Header>
        <BackButton onPress={goBack}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>

        <HeaderTitle>Cabeleireiros</HeaderTitle>

        <UserAvatr source={{ uri: user.avatar_url }} />
      </Header>
    </Container>
  );
};

export default CreateAppointment;
