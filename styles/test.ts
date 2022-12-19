import Component from 'ShopUi/models/component';

export default class SapOrderDetail extends Component {
    protected reorderSomeButton: HTMLButtonElement;
    protected itemsInOrder: HTMLCollectionOf<Element>;

    protected readyCallback(): void { }

    protected init(): void {
        this.itemsInOrder = document.getElementsByClassName('sap-product-card-item--order-detail');
        this.reorderSomeButton = <HTMLButtonElement>document.querySelector('.js-customer-reorder-form__trigger');

        this.mapEvents();
    }

    protected mapEvents(): void {
        const elements: Element[] = Array.from(this.itemsInOrder);
        elements.forEach((el: Element) => {
            const checkbox = el.querySelector('.checkbox__input--order-detail');
            checkbox.addEventListener('change', () => this.checkReorderButton());
        });
    }

    protected checkReorderButton(): void {
        const elements: Element[] = Array.from(this.itemsInOrder);
        let checkedCheckboxes = false;
        elements.forEach((el: Element) => {
            const checkbox: HTMLInputElement = el.querySelector('.checkbox__input--order-detail');
            if (checkbox.checked) {
                checkedCheckboxes = true;
            }
        });

        if (checkedCheckboxes) {
            this.reorderSomeButton.removeAttribute('disabled');
        } else {
            this.reorderSomeButton.setAttribute('disabled', 'true');
        }
    }
}