/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const HTML_EXAMPLE = `
<button type="button" class="btn btn-icon">
    <clr-icon shape="home"></clr-icon>
</button>
<button type="button" class="btn btn-icon btn-primary">
    <clr-icon shape="cog"></clr-icon>
</button>
<button type="button" class="btn btn-icon btn-warning">
    <clr-icon shape="warning-standard"></clr-icon>
</button>
<button type="button" class="btn btn-icon btn-danger">
    <clr-icon shape="error-standard"></clr-icon>
</button>
<button type="button" class="btn btn-icon btn-success">
    <clr-icon shape="check"></clr-icon>
</button>
<button type="button" class="btn btn-icon" disabled>
    <clr-icon shape="home"></clr-icon>
</button>
`;

@Component({
  selector: 'clr-icon-buttons-demo',
  templateUrl: './icon-buttons.html',
  styleUrls: ['./buttons.demo.scss'],
})
export class IconButtonsDemo {
  htmlExample = HTML_EXAMPLE;
}
