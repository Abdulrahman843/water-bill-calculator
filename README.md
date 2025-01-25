# Water Bill Calculator

This project is a simple web-based water bill calculator that allows users to calculate their water bill based on usage. The calculator uses tiered pricing rates defined by South West Water (UK) to calculate the bill. Users can input their water usage in litres and get the total cost in pounds.

## Features

- Calculates water bills based on tiered rates.
- Displays the total bill in pounds (£).
- Designed with a simple user interface for easy interaction.

## Rates Used

The following rates are used in this calculator (South West Water, UK):

- **Tier 1** (up to 5,000 litres): £1.50 per 1,000 litres
- **Tier 2** (5,001 to 15,000 litres): £2.50 per 1,000 litres
- **Tier 3** (15,001 to 30,000 litres): £3.50 per 1,000 litres
- **Tier 4** (above 30,000 litres): £5.00 per 1,000 litres

## Technologies Used

- **HTML**: For structure and layout.
- **CSS**: For styling and layout.
- **JavaScript**: For the logic of calculating the water bill.
- **Git**: For version control.
- **GitHub**: For hosting the project.

## How to Use

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Abdulrahman843/water-bill-calculator.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd water-bill-calculator
    ```
3. **Open the `index.html` file in your browser**:
   You can double-click the `index.html` file, or use the following command:
    ```bash
    open index.html  # MacOS
    start index.html # Windows
    xdg-open index.html # Linux
    ```
4. **Enter your water usage**:
   The calculator will prompt you to enter your water usage in litres. After entering your usage, the total bill will be displayed.

## How It Works

The calculator breaks down the total usage into tiers, applying different rates for each tier based on the amount of water consumed. The resulting bill is displayed in pounds (£).

## Contribution

Feel free to fork this repository and submit pull requests for any improvements or new features.

## License

This project is open-source and available under the [MIT License](LICENSE).
