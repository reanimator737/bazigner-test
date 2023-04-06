import React, { ChangeEvent, useCallback, useState } from 'react';
import { Card, Container, Input, SubmitButton, TextArea } from './style';
import { DefaultText, Header } from '~/components/text/style';

export const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const onNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setName(event.target.value), []);
  const onEmailChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value), []);
  const onSubjectChange = useCallback((event: ChangeEvent<HTMLInputElement>) => setSubject(event.target.value), []);
  const onMessageChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value), []);

  return (
    <Container id="contact">
      <Card>
        <Header>Contact</Header>
        <Input value={name} onChange={onNameChange} placeholder={'Your name'} />
        <Input value={email} onChange={onEmailChange} placeholder={'Your email'} />
        <Input value={subject} onChange={onSubjectChange} placeholder={'Subject'} />
        <TextArea value={message} onChange={onMessageChange} placeholder={'Message'} />
        <SubmitButton>
          <DefaultText>Send</DefaultText>
        </SubmitButton>
      </Card>
    </Container>
  );
};
