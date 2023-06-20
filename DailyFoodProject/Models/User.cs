using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Net;
using System.Text;
public class User : Person{


    public string login { get; set; } = string.Empty;

    public string password { get; set; } = string.Empty;
    public string phoneNumber { get; set; } = string.Empty;

    public DateTime dob { get; set; } = DateTime.Now;
    public double bonuses { get; set; } = 0;


    public bool status { get; set; } = true;

}