# from rest_framework.permissions import BasePermission, SAFE_METHODS

# class IsOwnerOrStaffOrReadOnly(BasePermission):
#     def has_object_permission(self, request, view, obj):
#         return bool(
#             request.method in SAFE_METHODS or
#             request.user and
#             request.user.is_authenticated and (obj.owner == request.user or request.user.is_staff)
#         )

from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsOwnerOrStaffOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            # Allow read permissions to authenticated users only
            return request.user and request.user.is_authenticated
        return True

    def has_object_permission(self, request, view, obj):
        # Allow write permissions if user is owner or staff
        return (
            request.method in SAFE_METHODS or
            request.user and
            request.user.is_authenticated and (obj.owner == request.user or request.user.is_staff)
        )
