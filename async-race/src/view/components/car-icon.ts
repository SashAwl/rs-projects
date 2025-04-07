import { Component } from './base-component';

export class CarIcon extends Component {
  //   private pathElement: SVGPathElement;

  constructor(color: string) {
    super({
      tag: 'svg',
      classes: ['car-item__icon'],
      text: 'auto',
    });

    this.setColor(color);

    // const svgNode = this.getNode();

    // svgNode.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    // svgNode.setAttribute('viewBox', '0 0 640 512');
    // svgNode.setAttribute('width', '100');
    // svgNode.setAttribute('height', '100');

    // this.pathElement = document.createElementNS(
    //   'http://www.w3.org/2000/svg',
    //   'path',
    // );
    // this.pathElement.setAttribute(
    //   'd',
    //   'M368.6 96l76.8 96L288 192l0-96 80.6 0zM224 80l0 112L64 192c-17.7 0-32 14.3-32 32l0 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l33.1 0c-.7 5.2-1.1 10.6-1.1 16c0 61.9 50.1 112 112 112s112-50.1 112-112c0-5.4-.4-10.8-1.1-16l66.3 0c-.7 5.2-1.1 10.6-1.1 16c0 61.9 50.1 112 112 112s112-50.1 112-112c0-5.4-.4-10.8-1.1-16l33.1 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c0-17.7-14.3-32-32-32l-48.6 0L418.6 56c-12.1-15.2-30.5-24-50-24L272 32c-26.5 0-48 21.5-48 48zm0 288a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm288 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z',
    // );

    // this.setColor(color);

    // svgNode.appendChild(this.pathElement);
  }

  public setColor(color: string): void {
    this.getNode().style.backgroundColor = color;
  }

  //   public setColor(color: string): void {
  //     this.pathElement.setAttribute('fill', color);
  //   }
}
