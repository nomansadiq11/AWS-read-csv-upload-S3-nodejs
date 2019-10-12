

resource "aws_s3_bucket" "s3-csvreader" {
  bucket = "readcsvfile"
  acl    = "private"


# lifecycle_rule {
#     id      = "csvfiles"
#     enabled = true

#     prefix = "csvfiles/"

#     tags = {
#       "rule"      = "csvfiles"
#       "autoclean" = "true"
#     }

#     transition {
#       days          = 30
#       storage_class = "STANDARD_IA" # or "ONEZONE_IA"
#     }

#     transition {
#       days          = 60
#       storage_class = "GLACIER"
#     }

#     expiration {
#       days = 90
#     }
#   }

 

  
  tags = {
    Name        = "csvreader"
    Environment = "Dev"
  }
}