﻿namespace WebApplication1
{
    public enum Year { First = 1, Second, Third }
    public class Student
    {
        public int id { get; set; }
        public string firstName { get; set; }
        public string familyName { get; set; }
        public string adress { get; set; }
        public string phone { get; set; }
        public bool active { get; set; }
        public int marksAvg { get; set; }
        public DateTime leaveDate { get; set; }
        public int profession { get; set; }
        public Year year { get; set; }
    }
}
