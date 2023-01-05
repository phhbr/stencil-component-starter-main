import { Component, h} from '@stencil/core';
import { Icons } from '../_functional';
@Component({
  tag: 'my-icon',
  styles: `svg { height: 24px; }`,
})
export class Icon {
  render() {
    const IconSVG = Icons['help'];
    return (
        <IconSVG />
    );
  }
}
