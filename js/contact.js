$(document).ready(function(){
    var localStorageAPI = {
       isSupported: function() {
            return window.localStorage;
        },

        setObject: function(key, object) {
            return localStorage.setItem(key, JSON.stringify(object));
        },

        getObject: function(key) {
            return JSON.parse(localStorage.getItem(key));
        },

        removeItem: function(key) {
            return localStorage.removeItem(key);
        },

        clearAll: function() {
            return localStorage.clear();
        }
    };
 
if (localStorageAPI.isSupported()) {
        var key = 'longForm';
        $('.form-control').on('blur', function() {
            var formObj = {};
            $('form').serializeArray().map(function(x) {
                formObj[x.name] = x.value;
            });
        localStorageAPI.setObject(key, formObj);
        });
       // populate existing form data
        var fData = localStorageAPI.getObject(key);
        if (fData) {
            $.each(fData, function(formEle, formEleVal) {
                $('[name=' + formEle + ']').val(formEleVal);
            });
 
 }}else {
     alert('No Local Storage Support!');
 }

    (function($) {
        "use strict";  
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");
    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Please Type Your Name",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "Please type your Subject.",
                    minlength: "your address must consist of at least 4 characters"
                },
                email: {
                    required: "Your Valid E-mail Address is required"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"/",
                    success: function() {
                        localStorageAPI.removeItem(key);
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 0.15, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 0.15, function() {
                            $('#error').fadeIn()
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
});