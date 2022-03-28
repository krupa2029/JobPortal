﻿using System.ComponentModel.DataAnnotations;

namespace Identity.Models.ViewModels
{
    public class LoginModel
    {

        [Required]
        public string UserName { get; set; }

        [Required]
        public string Password { get; set; }

    }
}
