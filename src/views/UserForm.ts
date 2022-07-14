import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-name': this.onButtonSetNameClick,
      'click:.set-random-age': this.onButtonSetRandomAge,
      'click:.save-model': this.onButtonSaveClick,
    };
  }

  onButtonSetNameClick = (): void => {
    const input = this.parent.querySelector<HTMLInputElement>('input');
    const name = input?.value.trim();
    if (!name) return;
    this.model.set({ name });
  };

  onButtonSetRandomAge = (): void => {
    this.model.setRandonAge();
  };

  onButtonSaveClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
    <div>
      <input placeholder="${this.model.get('name')}"/>
      <button class="set-name">Change Name</button>
      <button class="set-random-age">Set Random Age</button>
      <button class="save-model">Save User</button>
    </div>
    `;
  }
}
