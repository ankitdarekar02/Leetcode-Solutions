class Solution:
    def validIPAddress(self, IP: str) -> str:
        if re.search('^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$',IP):
            return 'IPv4'
        elif re.search('^(([0-9a-fA-F]{1,4})\:){7}([0-9a-fA-F]{1,4})$',IP): 
            return 'IPv6'
        else: 
            return 'Neither'
        