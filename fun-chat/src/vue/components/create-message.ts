import { createElement } from './create-element';

export type MessageDetails = {
  userName: string;
  userText: string;
  time: number;
  deliveryStatus: boolean;
  readStatus: boolean;
  editStatus: boolean;
};

export function showSendedMessage({
  userName,
  userText,
  time,
  deliveryStatus,
  readStatus,
  editStatus,
}: MessageDetails): void {
  const messages = document.querySelector('.messages__history');
  const initialText = document.querySelector('.messages__history__text');
  const oldMessage = document.querySelector('.messages__type');

  if (oldMessage instanceof HTMLTextAreaElement) {
    oldMessage.value = '';
  }

  if (messages && messages instanceof HTMLElement) {
    if (initialText) {
      initialText.remove();
      messages.classList.add('messages__history__list');
    }

    const messageItem = createElement({
      tag: 'div',
      classes: ['messages__item'],
      parent: messages,
    });

    createElement({
      tag: 'h5',
      text: userName,
      classes: ['messages__item__name'],
      parent: messageItem,
    });

    createElement({
      tag: 'p',
      text: userText,
      classes: ['messages__item__text'],
      parent: messageItem,
    });

    createElement({
      tag: 'p',
      text: formatTime(time),
      classes: ['messages__item__time'],
      parent: messageItem,
    });

    const details = createElement({
      tag: 'div',
      classes: ['messages__item__details'],
      parent: messageItem,
    });

    createElement({
      tag: 'p',
      text: `${deliveryStatus ? '' : 'not'} delivered`,
      classes: ['messages__item__detail'],
      parent: details,
    });

    createElement({
      tag: 'p',
      text: `${editStatus ? '' : 'not'} edited`,
      classes: ['messages__item__detail'],
      parent: details,
    });

    createElement({
      tag: 'p',
      text: `${readStatus ? '' : 'not'} readed`,
      classes: ['messages__item__detail'],
      parent: details,
    });
  }
}

function formatTime(time: number): string {
  const date = new Date(time);

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}.${month}.${year}, ${hours}:${minutes}`;
}
