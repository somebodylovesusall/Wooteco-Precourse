import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constants/messages.js';

const Output = {
  printGreeting() {
    Console.print(OUTPUT.greeting);
  },

  printPreview() {
    Console.print(OUTPUT.preview);
  },
  
  printError(error) {
    Console.print(error);
  },
}

export default Output;
