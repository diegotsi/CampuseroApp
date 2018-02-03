import React, { Component } from 'react';
import I18n from 'react-native-i18n';

import enUS from './locales/en-US';
import fr from './locales/fr';
import ptBR from './locales/pt-BR';
import es from './locales/es';

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

I18n.translations = {
  'en-US': enUS,
  'fr': fr,
  'pt-BR': ptBR,
  'es': es
};

export default I18n;