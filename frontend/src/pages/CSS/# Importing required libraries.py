# Importing required libraries
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Correcting the file path (use raw string or forward slashes)
file_path = r"C:\Users\Hp\Downloads\archive\test.csv"  # Use raw string to avoid unicodeescape error

# Load the dataset
df = pd.read_csv(file_path)

# Display the first few rows of the dataset
print(df.head())

# Basic dataset information
print("\nDataset Information:")
print(df.info())

# Check for missing values
print("\nMissing Values in Dataset:")
print(df.isnull().sum())

# Analysis 1: Passenger Survival Rate
# Assuming 'Survived' is a column in the dataset
survival_rate = df['Survived'].value_counts(normalize=True)
print("\nSurvival Rate (0 = Not Survived, 1 = Survived):")
print(survival_rate)

# Visualization 1: Survival Rate by Gender
sns.countplot(data=df, x='Survived', hue='Sex', palette='coolwarm')
plt.title("Survival Count by Gender")
plt.xlabel("Survived (0 = No, 1 = Yes)")
plt.ylabel("Count")
plt.show()

# Analysis 2: Average Age of Survivors vs Non-Survivors
avg_age = df.groupby('Survived')['Age'].mean()
print("\nAverage Age by Survival Status:")
print(avg_age)

# Visualization 2: Age Distribution
sns.histplot(data=df, x='Age', hue='Survived', kde=True, palette='husl')
plt.title("Age Distribution by Survival Status")
plt.xlabel("Age")
plt.ylabel("Count")
plt.show()

# Analysis 3: Survival Rate by Passenger Class
survival_by_class = df.groupby('Pclass')['Survived'].mean()
print("\nSurvival Rate by Passenger Class:")
print(survival_by_class)

# Visualization 3: Survival Rate by Class
sns.barplot(data=df, x='Pclass', y='Survived', palette='viridis')
plt.title("Survival Rate by Passenger Class")
plt.xlabel("Passenger Class")
plt.ylabel("Survival Rate")
plt.show()
