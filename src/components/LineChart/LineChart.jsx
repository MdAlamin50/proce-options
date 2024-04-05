import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const students = [
        {"id": 1, "name": "John", "math_mark": 85, "physics_mark": 78, "chemistry_mark": 82},
        {"id": 2, "name": "Emily", "math_mark": 70, "physics_mark": 72, "chemistry_mark": 75},
        {"id": 3, "name": "Michael", "math_mark": 92, "physics_mark": 88, "chemistry_mark": 90},
        {"id": 4, "name": "Sophia", "math_mark": 78, "physics_mark": 80, "chemistry_mark": 85},
        {"id": 5, "name": "Daniel", "math_mark": 65, "physics_mark": 68, "chemistry_mark": 70},
        {"id": 6, "name": "Olivia", "math_mark": 88, "physics_mark": 85, "chemistry_mark": 92},
        {"id": 7, "name": "James", "math_mark": 75, "physics_mark": 70, "chemistry_mark": 78},
        {"id": 8, "name": "Emma", "math_mark": 83, "physics_mark": 82, "chemistry_mark": 87},
        {"id": 9, "name": "William", "math_mark": 79, "physics_mark": 75, "chemistry_mark": 80},
        {"id": 10, "name": "Ava", "math_mark": 91, "physics_mark": 90, "chemistry_mark": 93}
      ]

    return (
        <div>
            <LChart width={900} height={400} data={students}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math_mark" stroke='green' ></Line>
                <Line dataKey="physics_mark" stroke='red'></Line>
                <Line dataKey="chemistry_mark"></Line>

            </LChart>
        </div>
    );
};

export default LineChart;