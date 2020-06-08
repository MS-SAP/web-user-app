import React, { useState } from 'react';
import Icons from '../assets/icons';
import SignupContainer from '../components/signup/SignupContainer';
import { Title } from '../components/Typography';
import { Form, Input, Checkbox, Radio, InputNumber, Select } from 'antd';
import Button from '../components/button';
import ClipLoader from 'react-spinners/ClipLoader';

import classes from './RegisterTutor.module.scss';
import { Subject } from '../types';
import { useHistory } from 'react-router-dom';

const { Option } = Select;

interface FormData {
  // start
  firstname?: string;
  lastname?: string;
  email?: string;
  grade?: number;
  isTutee?: boolean;
  // isTutee
  subjects?: Subject[];
  // finnish
  state?: string;
  school?: string;
  msg?: string;
  newsletter?: boolean;
}

const RegisterTutee = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState<'start' | 'finnish' | 'done'>(
    'start'
  );
  const [isTutee, setTutee] = useState(false);
  const [formData, setFormData] = useState<FormData>({});
  const [form] = Form.useForm();

  const renderStart = () => {
    return (
      <>
        <div className={classes.formContainerGroup}>
          <Form.Item
            className={classes.formItem}
            label="Vorname"
            name="firstname"
            rules={[
              { required: true, message: 'Bitte trage deinen Vornamen ein' },
            ]}
          >
            <Input placeholder="Max" defaultValue={formData.firstname} />
          </Form.Item>
          <Form.Item
            className={classes.formItem}
            label="Nachname"
            name="lastname"
            rules={[
              { required: true, message: 'Bitte trage deinen Nachnamen ein' },
            ]}
          >
            <Input placeholder="Mustermann" defaultValue={formData.lastname} />
          </Form.Item>
        </div>

        <Form.Item
          className={classes.formItem}
          label="E-Mail"
          name="email"
          rules={[{ required: true, message: 'Bitte trage deine E-Mail ein!' }]}
        >
          <Input
            placeholder="max.musterman@email.com"
            defaultValue={formData.email}
          />
        </Form.Item>
        <Form.Item
          className={classes.formItem}
          label="Klasse"
          name="grade"
          rules={[{ required: true, message: 'Bitte trage deine Klasse ein!' }]}
        >
          <Select
            placeholder="Bitte wähle deine Klasse aus"
            defaultValue={formData.grade ? `${formData.grade}` : undefined}
          >
            <Option value="1">1 Klasse</Option>
            <Option value="2">2 Klasse</Option>
            <Option value="3">3 Klasse</Option>
            <Option value="4">4 Klasse</Option>
            <Option value="5">5 Klasse</Option>
            <Option value="6">6 Klasse</Option>
            <Option value="7">7 Klasse</Option>
            <Option value="8">8 Klasse</Option>
            <Option value="9">9 Klasse</Option>
            <Option value="10">10 Klasse</Option>
            <Option value="11">11 Klasse</Option>
            <Option value="12">12 Klasse</Option>
            <Option value="13">13 Klasse</Option>
          </Select>
        </Form.Item>

        <Form.Item
          className={classes.formItem}
          name="additional"
          label="Weitere Angaben"
          rules={[{ required: true, message: 'Bitte wähle eine Option aus' }]}
        >
          <Checkbox.Group className={classes.checkboxGroup}>
            <Checkbox
              onChange={(e) => {
                setTutee(!isTutee);
              }}
              value="isTutee"
              style={{ lineHeight: '32px', marginLeft: '8px' }}
              defaultChecked={formData.isTutee}
            >
              Ich möchte persönliche Nachhilfe nehmen.
            </Checkbox>
            <Checkbox value="isGroups" style={{ lineHeight: '32px' }}>
              Ich möchte bei Gruppenkursen mitmachen.
            </Checkbox>
          </Checkbox.Group>
        </Form.Item>
      </>
    );
  };

  const renderFinnish = () => {
    return (
      <>
        <Form.Item
          className={classes.formItem}
          label="Bundesland"
          name="state"
          rules={[
            { required: true, message: 'Bitte trage dein Bundesland ein' },
          ]}
        >
          <Select placeholder="Baden-Württemberg" defaultValue={formData.state}>
            <Option value="BW"> Baden-Württemberg</Option>
            <Option value="BY"> Bayern</Option>
            <Option value="BE"> Berlin</Option>
            <Option value="BB"> Brandenburg</Option>
            <Option value="HB"> Bremen</Option>
            <Option value="HH"> Hamburg</Option>
            <Option value="HE"> Hessen</Option>
            <Option value="MV"> Mecklenburg-Vorpommern</Option>
            <Option value="NI"> Niedersachsen</Option>
            <Option value="NW"> Nordrhein-Westfalen</Option>
            <Option value="RP"> Rheinland-Pfalz</Option>
            <Option value="SL"> Saarland</Option>
            <Option value="SN"> Sachsen</Option>
            <Option value="ST"> Sachsen-Anhalt</Option>
            <Option value="SH"> Schleswig-Holstein</Option>
            <Option value="TH"> Thüringen</Option>
            <Option value="other">anderes Bundesland</Option>
          </Select>
        </Form.Item>
        <Form.Item
          className={classes.formItem}
          label="Schulform"
          name="school"
          rules={[
            { required: true, message: 'Bitte trage deine Schulform ein' },
          ]}
        >
          <Select placeholder="Grundschule.." defaultValue={formData.school}>
            <Option value="Grundschule">Grundschule</Option>
            <Option value="Gesamtschule">Gesamtschule</Option>
            <Option value="Hauptschule">Hauptschule</Option>
            <Option value="Realschule">Realschule</Option>
            <Option value="Gymnasium">Gymnasium</Option>
            <Option value="Förderschule">Förderschule</Option>
            <Option value="Sonstige">Sonstige</Option>
          </Select>
        </Form.Item>
        {isTutee && (
          <Form.Item
            className={classes.formItem}
            label="Fächer"
            name="subjects"
            rules={[
              {
                required: true,
                message: 'Bitte trage deine Fächer ein',
              },
            ]}
          >
            <Select
              mode="multiple"
              defaultValue={
                formData.subjects
                  ? formData.subjects.map((s) => s.name)
                  : undefined
              }
              placeholder="Bitte, wähle deine Fächer aus."
            >
              <Option value="Deutsch">Deutsch</Option>
              <Option value="Englisch">Englisch</Option>
              <Option value="Französisch">Französisch</Option>
              <Option value="Spanisch">Spanisch</Option>
              <Option value="Latein">Latein</Option>
              <Option value="Italienisch">Italienisch</Option>
              <Option value="Russisch">Russisch</Option>
              <Option value="Altgriechisch">Altgriechisch</Option>
              <Option value="Niederländisch">Niederländisch</Option>
              <Option value="Mathematik">Mathematik</Option>
              <Option value="Biologie">Biologie</Option>
              <Option value="Physik">Physik</Option>
              <Option value="Chemie">Chemie</Option>
              <Option value="Informatik">Informatik</Option>
              <Option value="Geschichte">Geschichte</Option>
              <Option value="Politik">Politik</Option>
              <Option value="Wirtschaft">Wirtschaft</Option>
              <Option value="Erdkunde">Erdkunde</Option>
              <Option value="Philosophie">Philosophie</Option>
              <Option value="Musik">Musik</Option>
              <Option value="Pädagogik">Pädagogik</Option>
              <Option value="Kunst">Kunst</Option>
            </Select>
          </Form.Item>
        )}
        <Form.Item className={classes.formItem} label="Nachricht" name="msg">
          <Input.TextArea
            placeholder="Hier deine Nachricht"
            defaultValue={formData.msg}
          />
        </Form.Item>

        <Form.Item
          className={classes.formItem}
          label="Newsletter"
          name="newsletter"
        >
          <Checkbox.Group className={classes.checkboxGroup}>
            <Checkbox value={'newsletter'} defaultChecked={formData.newsletter}>
              Newsletter abonnieren
            </Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item
          className={classes.formItem}
          label="AGBs"
          name="dataprotection"
          rules={[
            {
              required: true,
              message: 'Bitte akzeptiere die AGBs',
            },
          ]}
        >
          <Checkbox.Group className={classes.checkboxGroup}>
            <Checkbox value="dataprotection">
              Ich habe die Datenschutzinformationen und Einwilligung in die
              Verarbeitung personenbezogener Daten gelesen
            </Checkbox>
          </Checkbox.Group>
        </Form.Item>
      </>
    );
  };
  const renderDone = () => {
    return (
      <div className={classes.successContainer}>
        <Title className={classes.loginTitle} size="h4">
          Wir haben dir eine E-Mail geschickt.
        </Title>
        <Icons.SignupEmailSent />
      </div>
    );
  };

  const renderFormItems = () => {
    if (formState === 'start') {
      return renderStart();
    }

    if (formState === 'finnish') {
      return renderFinnish();
    }
    if (formState === 'done') {
      return renderDone();
    }
  };

  const back = () => {
    if (formState === 'finnish') {
      setFormState('start');
    }
    if (formState === 'done') {
      setFormState('start');
    }
  };

  const nextStep = async (event: React.MouseEvent) => {
    event.preventDefault();

    if (formState === 'done') {
      history.push('/login');
      return;
    }

    try {
      const formValues = await form.validateFields();
      console.log(formValues);

      if (formState === 'start') {
        setFormData({
          ...formData,
          firstname: formValues.firstname,
          lastname: formValues.lastname,
          email: formValues.email,
          grade: parseInt(formValues.grade),
          isTutee: formValues.additional.includes('isTutee'),
        });

        setFormState('finnish');
      }

      if (formState === 'finnish') {
        const data = {
          ...formData,
          state: formValues.state,
          school: formValues.school,
          subjects: isTutee
            ? formValues.subjects.map((s) => ({
                name: s,
                minGrade: 1,
                maxGrade: 13,
              }))
            : undefined,
          msg: formValues.msg,
          newsletter: formValues.newsletter?.includes('newsletter'),
        };
        console.log(data);

        setFormData(data);
        register(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const register = (data: FormData) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormState('done');
      setFormData({});
    }, 3000);
  };

  return (
    <SignupContainer>
      <div className={classes.signupContainer}>
        <a
          rel="noopener noreferrer"
          href="https://www.corona-school.de/"
          target="_blank"
        >
          <Icons.Logo className={classes.logo} />
          <Title size="h2" bold>
            Corona School
          </Title>
        </a>
        <Title>
          {formState === 'done' ? (
            <span>Du wurdest erfolgreich als Schüler*in registriert</span>
          ) : (
            <span>
              Ich möchte mich registrieren als <b>Schüler*in</b>
            </span>
          )}
        </Title>
      </div>

      <Form
        form={form}
        className={classes.formContainer}
        layout="vertical"
        name="basic"
        initialValues={{ remember: true }}
      >
        {!loading ? (
          renderFormItems()
        ) : (
          <div className={classes.loadingContainer}>
            <ClipLoader size={100} color={'#123abc'} loading={true} />
          </div>
        )}

        <div className={classes.buttonContainer}>
          {formState !== 'start' && (
            <Button
              onClick={back}
              className={classes.backButton}
              color="#4E6AE6"
              backgroundColor="white"
            >
              Zurück
            </Button>
          )}
          <Button
            onClick={nextStep}
            className={classes.signupButton}
            color="white"
            backgroundColor="#4E6AE6"
          >
            {formState === 'finnish' && 'Registrieren'}
            {formState === 'start' && 'Weiter'}
            {formState === 'done' && 'Anmelden'}
          </Button>
        </div>
      </Form>
    </SignupContainer>
  );
};

export default RegisterTutee;